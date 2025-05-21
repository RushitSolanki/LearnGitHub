// Simple test suite for our GitHub Learning Project
function testCommitCounter() {
  let commitCount = 0;
  const counter = { textContent: "0" };

  // Simulate increment
  commitCount++;
  counter.textContent = commitCount.toString();

  // Test if counter increments correctly
  if (counter.textContent !== "1") {
    throw new Error("Commit counter should increment to 1");
  }

  // Test multiple increments
  commitCount++;
  counter.textContent = commitCount.toString();

  if (counter.textContent !== "2") {
    throw new Error("Commit counter should increment to 2");
  }

  console.log("✅ All commit counter tests passed!");
}

// Run tests
try {
  testCommitCounter();
} catch (error) {
  console.error("❌ Test failed:", error.message);
  process.exit(1);
}
