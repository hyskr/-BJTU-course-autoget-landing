import { AppConfig } from '../types';

export const apps: AppConfig[] = [
    {
        id: 'course-autoget',
        name: 'BJTU 自动抢课工具',
        description: '一个基于 Electron 的北京交通大学自动抢课工具,支持验证码自动识别',
        repo: 'hyskr/BJTU-course-autoget-program',
    },
    {
        id: 'mis-helper',
        name: 'BJTU MIS 辅助插件',
        description: '一个用于北京交通大学统一认证系统的 Chrome 扩展，支持自动填充用户名、密码和验证码，以及教学评教自动填写。',
        repo: 'hyskr/bjtu-mis-helper',
    }
];