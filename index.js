#!/usr/bin/env node

console.log('pgx-cli脚手架工具');
const { program } = require('commander');
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')
program
    .version('0.1.0') //输出对应的版本号

program
    .command('create <project>') //
    .description('初始化项目模板')
    .action(function(project){
        // 在下载前提示
        const spinner = ora('正在下载模板当中...').start()

        // download的
        //   第一个参数：仓库地址#分支  注意需要改成所需要的格式，不要直接复制粘贴
        //   第二个参数： 项目名
        const downLoadUrl = `http://github.com:peigexing/pgx_template#master`
        download(downLoadUrl,project,{clone:true},err=>{
            if (err){
                spinner.fail()
                return console.log(logSymbols.error,chalk.red('下载失败，失败原因：'+err));
            }else{
                spinner.succeed();
                return console.log(logSymbols.success,chalk.yellow('下载成功'));
            }
        })
    });

program
    .command('help')
    .description('查看所有可用的模板帮助')
    .action(function(){
        console.log(`在这里可以书写相关的帮助信息`);
    });

program.parse(process.argv);
