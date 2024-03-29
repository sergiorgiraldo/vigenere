// Run at root
// npm init -y
// npm install @actions/core @actions/github @actions/exec

const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
	core.notice("Deploying to S3 using deploy-s3-javascript custom action");

	const bucket = core.getInput("bucket", { required: true });
	const bucketRegion = core.getInput("bucket-region", { required: true });
	const distFolder = core.getInput("dist-folder", { required: true });

	const s3Uri = `s3://${bucket}`;
	exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

	const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com/`;
	core.setOutput("website-url", websiteUrl);
}

run();
