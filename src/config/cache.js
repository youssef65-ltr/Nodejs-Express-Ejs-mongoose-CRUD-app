const { createClient } = require("redis");

const client = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

client.on("error", (err) => console.log("Redis error:", err.message));
client.on("connect", () => console.log("Redis connected"));

// call this one time when the app starts
async function connectCache() {
  if (!client.isOpen) await client.connect();
}

// read a value (returns null if not found)
async function getCache(key) {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
}

// save a value with TTL (seconds) + small random time
async function setCache(key, value, ttl = 60) {
  const jitter = Math.floor(Math.random() * 10);
  await client.set(key, JSON.stringify(value), { EX: ttl + jitter });
}

// delete one key
async function delCache(key) {
  await client.del(key);
}

// cache-aside in one function
async function getOrSet(key, fetchFn, ttl = 60) {
  const cached = await getCache(key);
  if (cached) return cached;

  const fresh = await fetchFn();
  await setCache(key, fresh, ttl);
  return fresh;
}

module.exports = { client, connectCache, getCache, setCache, delCache, getOrSet };
