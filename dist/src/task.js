const users = [
    { id: 123, username: "arslonbekXX" },
    { id: 11, username: "kent" },
    { id: 8, username: "mark" },
];
const repositories = [
    { id: "abc123", name: "pdp-g-10", ownerUsername: "arslonbekXX" },
    { id: "cc120", name: "pdp-g-7", ownerUsername: "arslonbekXX" },
    { id: "bb11", name: "pdp-g-8", ownerUsername: "arslonbekXX" },
];
const branches = [
    { id: "b22", name: "lesson-22", repoId: "abc123" },
    { id: "b33", name: "lesson-33", repoId: "abc123" },
    { id: "b11", name: "lesson-11", repoId: "bb11" },
];
const commits = [
    { id: "1", message: "lesson-22 start-codes", branchId: "b22", createdAt: "12.05.23" },
    { id: "2", message: "lesson-22 finish-codes", branchId: "b22", createdAt: "13.08.23" },
    { id: "3", message: "lesson-22 for challenge", branchId: "b22", createdAt: "03.05.23" },
];
const time = 2000;
function getUsers() {
    console.log("[USERS] Waiting...");
    return new Promise((solve) => setTimeout(() => solve(users), time));
}
function getRepositories(username) {
    console.log("[REPOSITORIES] Waiting...");
    return new Promise((solve) => setTimeout(() => solve(repositories.filter((r) => r.ownerUsername === username)), time));
}
function getBranches(repoID) {
    console.log("[BRANCHES] Waiting...");
    return new Promise((solve) => setTimeout(() => solve(branches.filter((b) => b.repoId === repoID)), time));
}
function getCommits(branchID) {
    console.log("[COMMITS] Waiting...");
    return new Promise((solve) => setTimeout(() => solve(commits.filter((c) => c.branchId === branchID)), time));
}
async function main() {
    const users = await getUsers();
    console.log("users = ", users);
    const repositories = await getRepositories(users[0].username);
    console.log("repositories = ", repositories);
    const branches = await getBranches(repositories[0].id);
    console.log("branches = ", branches);
    const commits = await getCommits(branches[0].id);
    console.log("commits = ", commits);
}
main();
export {};
