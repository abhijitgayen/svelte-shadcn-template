#!/usr/bin/env node

/**
 * Sync AI Rules Script
 * Single Source of Truth: AGENTS.md
 *
 * This script synchronizes all tool-specific AI configuration files:
 * - .cursorrules & .cursor/rules/svelte5-shadcn.mdc (Cursor IDE)
 * - CLAUDE.md (Claude Code CLI & Anthropic)
 * - .github/copilot-instructions.md (GitHub Copilot)
 * - .windsurfrules (Windsurf IDE)
 * - skills/sveltekit-shadcn/SKILL.md (Antigravity / Agent Skills runtime)
 *
 * It embeds the FULL master guidelines from AGENTS.md into each file
 * ensuring 100% rule parity across every AI assistant without manual duplication.
 *
 * Note: Zed editor natively reads AGENTS.md directly, so no extra duplicate
 * files (.rules or .zed/) are required.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const agentsPath = path.join(rootDir, 'AGENTS.md');

function sync() {
	if (!fs.existsSync(agentsPath)) {
		console.error('Error: AGENTS.md not found in repository root.');
		process.exit(1);
	}

	const agentsContent = fs.readFileSync(agentsPath, 'utf-8');

	console.log('🔄 Syncing AI rules from single source of truth: AGENTS.md ...');

	// 1. Sync .cursorrules (full content + @AGENTS.md context tag)
	const cursorrulesContent = `# Cursor Rules: SvelteKit + shadcn-svelte
# Automatically synchronized from AGENTS.md - DO NOT EDIT DIRECTLY

@AGENTS.md

${agentsContent}
`;
	fs.writeFileSync(path.join(rootDir, '.cursorrules'), cursorrulesContent.trim() + '\n', 'utf-8');
	console.log('  ✓ Updated .cursorrules');

	// 2. Sync .cursor/rules/svelte5-shadcn.mdc
	const cursorRulesDir = path.join(rootDir, '.cursor', 'rules');
	if (!fs.existsSync(cursorRulesDir)) {
		fs.mkdirSync(cursorRulesDir, { recursive: true });
	}

	const cursorMdcContent = `---
description: Master rules for Svelte 5 Runes, Tailwind v4, shadcn-svelte, and SEO
globs: **/*.svelte, **/*.ts
alwaysApply: true
---

# Master Svelte 5 + shadcn-svelte Guidelines
# Automatically synchronized from AGENTS.md - DO NOT EDIT DIRECTLY

${agentsContent}
`;
	fs.writeFileSync(
		path.join(cursorRulesDir, 'svelte5-shadcn.mdc'),
		cursorMdcContent.trim() + '\n',
		'utf-8'
	);
	console.log('  ✓ Updated .cursor/rules/svelte5-shadcn.mdc');

	// 3. Sync CLAUDE.md
	const claudeContent = `# CLAUDE.md - Guidelines for Claude Code
# Automatically synchronized from AGENTS.md - DO NOT EDIT DIRECTLY

${agentsContent}
`;
	fs.writeFileSync(path.join(rootDir, 'CLAUDE.md'), claudeContent.trim() + '\n', 'utf-8');
	console.log('  ✓ Updated CLAUDE.md');

	// 4. Sync .github/copilot-instructions.md
	const copilotDir = path.join(rootDir, '.github');
	if (!fs.existsSync(copilotDir)) {
		fs.mkdirSync(copilotDir, { recursive: true });
	}

	const copilotContent = `# GitHub Copilot Instructions
# Automatically synchronized from AGENTS.md - DO NOT EDIT DIRECTLY

${agentsContent}
`;
	fs.writeFileSync(
		path.join(copilotDir, 'copilot-instructions.md'),
		copilotContent.trim() + '\n',
		'utf-8'
	);
	console.log('  ✓ Updated .github/copilot-instructions.md');

	// 5. Sync .windsurfrules
	const windsurfContent = `# Windsurf Rules
# Automatically synchronized from AGENTS.md - DO NOT EDIT DIRECTLY

${agentsContent}
`;
	fs.writeFileSync(path.join(rootDir, '.windsurfrules'), windsurfContent.trim() + '\n', 'utf-8');
	console.log('  ✓ Updated .windsurfrules');

	// 6. Sync skills/sveltekit-shadcn/SKILL.md
	const skillDir = path.join(rootDir, 'skills', 'sveltekit-shadcn');
	if (fs.existsSync(skillDir)) {
		const skillPath = path.join(skillDir, 'SKILL.md');
		const skillHeader = `---
name: sveltekit-shadcn
description: Comprehensive guidelines and best practices for developing in this SvelteKit 3 + Svelte 5 (Runes) + Tailwind CSS v4 + shadcn-svelte starter template. Use this skill whenever creating or editing components, pages, routes, styling, dark mode, SEO, or adding shadcn-svelte primitives.
metadata:
  namespace: template
---

`;
		fs.writeFileSync(skillPath, skillHeader + agentsContent.trim() + '\n', 'utf-8');
		console.log('  ✓ Updated skills/sveltekit-shadcn/SKILL.md');
	}

	console.log('✨ All AI tools are 100% in sync with AGENTS.md!\n');
}

// Initial sync
sync();

// Watch mode support
if (process.argv.includes('--watch')) {
	console.log('👀 Watching AGENTS.md for changes... (Press Ctrl+C to stop)');
	let debounceTimer = null;
	fs.watch(agentsPath, (eventType) => {
		if (eventType === 'change') {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				console.log('\n📝 AGENTS.md modified. Re-syncing...');
				sync();
			}, 100);
		}
	});
}
