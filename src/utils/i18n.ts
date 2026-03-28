type MessageKey =
    | "error.checkoutFailed"
    | "error.createBranchFailed"
    | "error.rebaseFailed"
    | "error.mergeFailed"
    | "error.updateFailed"
    | "error.pushFailed"
    | "error.renameFailed"
    | "error.deleteFailed"
    | "error.rollbackFailed"
    | "error.shelveFailed"
    | "error.showHistoryFailed"
    | "error.acceptYoursFailed"
    | "error.acceptTheirsFailed"
    | "error.loadCommitFailed"
    | "error.openCommitDiffFailed"
    | "error.commitActionFailed"
    | "error.cherryPickFailed"
    | "error.revertFailed"
    | "error.resetFailed"
    | "error.checkoutRevisionFailed"
    | "error.createPatchFailed"
    | "error.createTagFailed"
    | "error.undoCommitFailed"
    | "error.editCommitMessageFailed"
    | "error.dropCommitFailed"
    | "error.interactiveRebaseFailed"
    | "error.pushAllUpToHereFailed"
    | "message.checkedOut"
    | "message.createdAndCheckedOut"
    | "message.checkedOutAndRebased"
    | "message.rebased"
    | "message.merged"
    | "message.updated"
    | "message.pushed"
    | "message.renamed"
    | "message.deleted"
    | "message.rolledBack"
    | "message.shelved"
    | "message.deletedFile"
    | "message.copiedRevision"
    | "message.cherryPicked"
    | "message.reverted"
    | "message.resetBranch"
    | "message.checkedOutRevision"
    | "message.patchCreated"
    | "message.createdTag"
    | "message.undidCommits"
    | "message.commitMessageUpdated"
    | "message.droppedCommit"
    | "message.openedInteractiveRebase"
    | "message.pushedCommits"
    | "message.acceptedYours"
    | "message.acceptedTheirs"
    | "message.conflictOpened"
    | "message.mergeConflictsDetected"
    | "message.noUnresolvedConflicts"
    | "label.rollback"
    | "label.delete"
    | "label.deleteAnyway"
    | "label.rebase"
    | "label.merge"
    | "label.cherryPick"
    | "label.revert"
    | "label.reset"
    | "label.checkout"
    | "label.push"
    | "label.setUpstreamAndPush"
    | "label.undo"
    | "label.drop"
    | "label.ok"
    | "label.close"
    | "label.mergeButton"
    | "label.apply"
    | "label.pop"
    | "label.shelveChanges"
    | "label.commitMessage"
    | "label.amend"
    | "label.commit"
    | "label.commitAndPush"
    | "label.refresh"
    | "label.refreshing"
    | "label.groupByDirectory"
    | "label.showDiffPreview"
    | "label.expandAll"
    | "label.collapseAll"
    | "label.acceptYours"
    | "label.acceptTheirs"
    | "label.yours"
    | "label.theirs"
    | "label.name"
    | "label.conflicts"
    | "label.mergingBranch"
    | "label.intoBranch"
    | "label.unresolvedFiles"
    | "label.groupFilesByDirectory"
    | "label.incomingBranch"
    | "label.currentBranch"
    | "label.noCommitSelected"
    | "label.changedFiles"
    | "label.commitDetails"
    | "label.branches"
    | "label.tags"
    | "label.filesChanged"
    | "label.noShelvedChanges"
    | "label.loading"
    | "label.noFilesInStash"
    | "label.shelvedChanges"
    | "label.coming"
    | "label.newBranchFrom"
    | "label.pushBranch"
    | "label.renameBranch"
    | "label.update"
    | "label.checkoutBranch"
    | "label.rebaseCurrentOnto"
    | "label.mergeIntoCurrent"
    | "label.copyRevisionNumber"
    | "label.createPatch"
    | "label.cherryPickCommit"
    | "label.checkoutRevision"
    | "label.resetCurrentBranchToHere"
    | "label.revertCommit"
    | "label.pushAllUpToHere"
    | "label.undoCommit"
    | "label.editCommitMessage"
    | "label.dropCommit"
    | "label.interactivelyRebaseFromHere"
    | "label.newBranch"
    | "label.newTag"
    | "label.pushAvailableOnlyForUnpushed"
    | "label.pushOnlyAvailableForLocalBranch"
    | "label.commitNotInHistory"
    | "label.noRemoteConfigured"
    | "label.noTrackedRemote"
    | "label.invalidBranchName"
    | "label.invalidCommitHash"
    | "label.cannotDeleteCheckedOut"
    | "label.hasUnmergedCommits"
    | "label.deleteAnywayWarning"
    | "label.undoOnlyForUnpushed"
    | "label.undoNotForMergeCommits"
    | "label.editMessageOnlyForUnpushed"
    | "label.cannotEditInitialCommit"
    | "label.rebaseInteractiveOpened"
    | "label.dropOnlyForUnpushed"
    | "label.cannotDropInitialCommit"
    | "label.vscodeMergeEditorFailed"
    | "label.openingFileInstead"
    | "label.branchHasNoUpstream"
    | "label.setUpstreamAndPushQuestion"
    | "label.pushAllCommitsQuestion"
    | "label.rebaseQuestion"
    | "label.mergeQuestion"
    | "label.resetQuestion"
    | "label.checkoutCommitQuestion"
    | "label.cherryPickQuestion"
    | "label.revertQuestion"
    | "label.dropCommitQuestion"
    | "label.undoQuestion"
    | "label.changedFilesPlural";

type LocalizeKey = MessageKey;

const translations: Record<string, Partial<Record<MessageKey, string>>> = {
    en: {},
    zh: {},
    "zh-cn": {},
};

const englishStrings: Record<MessageKey, string> = {
    "error.checkoutFailed": "Checkout failed: {0}",
    "error.createBranchFailed": "Failed to create branch: {0}",
    "error.rebaseFailed": "Rebase failed: {0}",
    "error.mergeFailed": "Merge failed: {0}",
    "error.updateFailed": "Update failed: {0}",
    "error.pushFailed": "Push failed: {0}",
    "error.renameFailed": "Rename failed: {0}",
    "error.deleteFailed": "Delete failed: {0}",
    "error.rollbackFailed": "Rollback failed: {0}",
    "error.shelveFailed": "Shelve failed: {0}",
    "error.showHistoryFailed": "Show history failed: {0}",
    "error.acceptYoursFailed": "Accept yours failed: {0}",
    "error.acceptTheirsFailed": "Accept theirs failed: {0}",
    "error.loadCommitFailed": "Failed to load commit: {0}",
    "error.openCommitDiffFailed": "Failed to open commit diff: {0}",
    "error.commitActionFailed": "Commit action failed: {0}",
    "error.cherryPickFailed": "Cherry-pick failed: {0}",
    "error.revertFailed": "Revert failed: {0}",
    "error.resetFailed": "Reset failed: {0}",
    "error.checkoutRevisionFailed": "Checkout failed: {0}",
    "error.createPatchFailed": "Failed to create patch: {0}",
    "error.createTagFailed": "Failed to create tag: {0}",
    "error.undoCommitFailed": "Undo commit failed: {0}",
    "error.editCommitMessageFailed": "Edit commit message failed: {0}",
    "error.dropCommitFailed": "Failed to drop commit: {0}",
    "error.interactiveRebaseFailed": "Interactive rebase failed: {0}",
    "error.pushAllUpToHereFailed": "Push all up to here failed: {0}",
    "message.checkedOut": "Checked out {0}",
    "message.createdAndCheckedOut": "Created and checked out {0}",
    "message.checkedOutAndRebased": "Checked out {0} and rebased onto {1}",
    "message.rebased": "Rebased onto {0}",
    "message.merged": "Merged {0}",
    "message.updated": "Updated {0}",
    "message.pushed": "Pushed {0}",
    "message.renamed": "Renamed {0} to {1}",
    "message.deleted": "Deleted {0}",
    "message.rolledBack": "Changes rolled back.",
    "message.shelved": "Shelved {0}.",
    "message.deletedFile": "Deleted {0}",
    "message.copiedRevision": "Copied revision {0}.",
    "message.cherryPicked": "Cherry-picked {0}.",
    "message.reverted": "Reverted {0}.",
    "message.resetBranch": "Reset current branch to {0}.",
    "message.checkedOutRevision": "Checked out revision {0}.",
    "message.patchCreated": "Patch created: {0}",
    "message.createdTag": "Created tag {0}.",
    "message.undidCommits": "Undid {0} commit(s) up to {1}.",
    "message.commitMessageUpdated": "Commit message updated.",
    "message.droppedCommit": "Dropped {0} from history.",
    "message.openedInteractiveRebase": "Opened interactive rebase from {0}.",
    "message.pushedCommits": "Pushed commits up to {0}.",
    "message.acceptedYours": "Accepted yours for {0}",
    "message.acceptedTheirs": "Accepted theirs for {0}",
    "message.conflictOpened": "Merge conflict session opened for {0}",
    "message.mergeConflictsDetected": "Merge produced {0} unresolved conflict file(s). Opened Conflicts session.",
    "message.noUnresolvedConflicts": "No unresolved merge conflicts found.",
    "label.rollback": "Rollback",
    "label.delete": "Delete",
    "label.deleteAnyway": "Delete Anyway",
    "label.rebase": "Rebase",
    "label.merge": "Merge",
    "label.cherryPick": "Cherry-pick",
    "label.revert": "Revert",
    "label.reset": "Reset",
    "label.checkout": "Checkout",
    "label.push": "Push",
    "label.setUpstreamAndPush": "Set Upstream and Push",
    "label.undo": "Undo",
    "label.drop": "Drop",
    "label.ok": "OK",
    "label.close": "Close",
    "label.mergeButton": "Merge...",
    "label.apply": "Apply",
    "label.pop": "Pop",
    "label.shelveChanges": "Shelve Changes",
    "label.commitMessage": "Commit Message",
    "label.amend": "Amend",
    "label.commit": "Commit",
    "label.commitAndPush": "Commit and Push...",
    "label.refresh": "Refresh",
    "label.refreshing": "Refreshing...",
    "label.groupByDirectory": "Group by Directory",
    "label.showDiffPreview": "Show Diff Preview",
    "label.expandAll": "Expand All",
    "label.collapseAll": "Collapse All",
    "label.acceptYours": "Accept Yours",
    "label.acceptTheirs": "Accept Theirs",
    "label.yours": "Yours",
    "label.theirs": "Theirs",
    "label.name": "Name",
    "label.conflicts": "Conflicts",
    "label.mergingBranch": "Merging branch",
    "label.intoBranch": "into branch",
    "label.unresolvedFiles": "{0} unresolved file(s)",
    "label.groupFilesByDirectory": "Group files by directory",
    "label.incomingBranch": "incoming branch",
    "label.currentBranch": "current branch",
    "label.noCommitSelected": "No commit selected",
    "label.changedFiles": "Changed Files",
    "label.commitDetails": "Commit Details",
    "label.branches": "Branches",
    "label.tags": "Tags",
    "label.filesChanged": "{0} file(s) changed",
    "label.noShelvedChanges": "No shelved changes",
    "label.loading": "Loading...",
    "label.noFilesInStash": "No files in this shelved change.",
    "label.shelvedChanges": "Shelved changes",
    "label.coming": "Coming...",
    "label.newBranchFrom": "New Branch from {0}...",
    "label.pushBranch": "Push...",
    "label.renameBranch": "Rename...",
    "label.update": "Update",
    "label.checkoutBranch": "Checkout",
    "label.rebaseCurrentOnto": "Rebase {0} onto {1}",
    "label.mergeIntoCurrent": "Merge {0} into {1}",
    "label.copyRevisionNumber": "Copy Revision Number",
    "label.createPatch": "Create Patch...",
    "label.cherryPickCommit": "Cherry-Pick",
    "label.checkoutRevision": "Checkout Revision",
    "label.resetCurrentBranchToHere": "Reset Current Branch to Here...",
    "label.revertCommit": "Revert Commit",
    "label.pushAllUpToHere": "Push All up to Here...",
    "label.undoCommit": "Undo Commit...",
    "label.editCommitMessage": "Edit Commit Message...",
    "label.dropCommit": "Drop Commit",
    "label.interactivelyRebaseFromHere": "Interactively Rebase from Here...",
    "label.newBranch": "New Branch...",
    "label.newTag": "New Tag...",
    "label.pushAvailableOnlyForUnpushed": "Push All up to Here is available only for unpushed commits.",
    "label.pushOnlyAvailableForLocalBranch": "Push All up to Here is only available when a local branch is checked out.",
    "label.commitNotInHistory": "Commit {0} is not in the current branch history.",
    "label.noRemoteConfigured": "No remote configured for branch {0}.",
    "label.noTrackedRemote": "No tracked remote branch configured for '{0}'.",
    "label.invalidBranchName": "Invalid branch name '{0}'. Names must contain only alphanumeric characters, dots, dashes, underscores, or slashes, and must not start with a dash.",
    "label.invalidCommitHash": "Invalid commit hash received for commit action.",
    "label.cannotDeleteCheckedOut": "Cannot delete '{0}' because it is currently checked out. Switch to another branch and try again.",
    "label.hasUnmergedCommits": "Branch {0} has unmerged commits relative to {1}. Delete anyway?\nThis may permanently lose commits not reachable from {1}.",
    "label.deleteAnywayWarning": "Branch '{0}' has unmerged commits. Do you still want to delete it?\nThis may permanently lose commits not reachable from the current branch.",
    "label.undoOnlyForUnpushed": "Undo Commit is available only for unpushed commits.",
    "label.undoNotForMergeCommits": "Undo Commit is not available for merge commits.",
    "label.editMessageOnlyForUnpushed": "Edit Commit Message is available only for unpushed commits.",
    "label.cannotEditInitialCommit": "Edit Commit Message is not available for the initial commit.",
    "label.rebaseInteractiveOpened": "Interactive rebase opened. Mark the commit as 'reword' in the todo list.",
    "label.dropOnlyForUnpushed": "Drop Commit is available only for unpushed commits.",
    "label.cannotDropInitialCommit": "Cannot drop the initial commit of the repository.",
    "label.vscodeMergeEditorFailed": "VS Code merge editor command failed ({0}). Opening the file instead.",
    "label.openingFileInstead": "Opening file instead.",
    "label.branchHasNoUpstream": "Branch '{0}' has no upstream. Set upstream to '{1}' and push commits up to {2}?",
    "label.setUpstreamAndPushQuestion": "Set Upstream and Push",
    "label.pushAllCommitsQuestion": "Push all commits up to {0} to {1}/{2}?",
    "label.rebaseQuestion": "Rebase current branch onto {0}?",
    "label.mergeQuestion": "Merge {0} into current branch?",
    "label.resetQuestion": "Hard reset current branch to {0}? This will reset the index and working tree and permanently discard any uncommitted changes.",
    "label.checkoutCommitQuestion": "Checkout commit {0}? This creates a detached HEAD state.",
    "label.cherryPickQuestion": "Cherry-pick commit {0}?",
    "label.revertQuestion": "Revert commit {0}?",
    "label.dropCommitQuestion": "Drop commit {0} from current branch history?",
    "label.undoQuestion": "Undo {0} commit(s) up to {1} (soft reset)?",
    "label.changedFilesPlural": "{0} changed files",
};

const chineseStrings: Record<MessageKey, string> = {
    "error.checkoutFailed": "检出失败: {0}",
    "error.createBranchFailed": "创建分支失败: {0}",
    "error.rebaseFailed": "变基失败: {0}",
    "error.mergeFailed": "合并失败: {0}",
    "error.updateFailed": "更新失败: {0}",
    "error.pushFailed": "推送失败: {0}",
    "error.renameFailed": "重命名失败: {0}",
    "error.deleteFailed": "删除失败: {0}",
    "error.rollbackFailed": "回滚失败: {0}",
    "error.shelveFailed": "暂存失败: {0}",
    "error.showHistoryFailed": "显示历史失败: {0}",
    "error.acceptYoursFailed": "接受我的版本失败: {0}",
    "error.acceptTheirsFailed": "接受他们的版本失败: {0}",
    "error.loadCommitFailed": "加载提交失败: {0}",
    "error.openCommitDiffFailed": "打开提交差异失败: {0}",
    "error.commitActionFailed": "提交操作失败: {0}",
    "error.cherryPickFailed": "精选失败: {0}",
    "error.revertFailed": "还原失败: {0}",
    "error.resetFailed": "重置失败: {0}",
    "error.checkoutRevisionFailed": "检出失败: {0}",
    "error.createPatchFailed": "创建补丁失败: {0}",
    "error.createTagFailed": "创建标签失败: {0}",
    "error.undoCommitFailed": "撤销提交失败: {0}",
    "error.editCommitMessageFailed": "编辑提交消息失败: {0}",
    "error.dropCommitFailed": "删除提交失败: {0}",
    "error.interactiveRebaseFailed": "交互式变基失败: {0}",
    "error.pushAllUpToHereFailed": "推送到此位置失败: {0}",
    "message.checkedOut": "已检出 {0}",
    "message.createdAndCheckedOut": "已创建并检出 {0}",
    "message.checkedOutAndRebased": "已检出 {0} 并变基到 {1}",
    "message.rebased": "已变基到 {0}",
    "message.merged": "已合并 {0}",
    "message.updated": "已更新 {0}",
    "message.pushed": "已推送 {0}",
    "message.renamed": "已将 {0} 重命名为 {1}",
    "message.deleted": "已删除 {0}",
    "message.rolledBack": "更改已回滚。",
    "message.shelved": "已暂存 {0}。",
    "message.deletedFile": "已删除 {0}",
    "message.copiedRevision": "已复制版本号 {0}",
    "message.cherryPicked": "已精选 {0}",
    "message.reverted": "已还原 {0}",
    "message.resetBranch": "已重置当前分支到 {0}",
    "message.checkedOutRevision": "已检出版本 {0}",
    "message.patchCreated": "补丁已创建: {0}",
    "message.createdTag": "已创建标签 {0}",
    "message.undidCommits": "已撤销 {0} 个提交至 {1}",
    "message.commitMessageUpdated": "提交消息已更新",
    "message.droppedCommit": "已从历史记录中删除 {0}",
    "message.openedInteractiveRebase": "已打开从 {0} 开始的交互式变基",
    "message.pushedCommits": "已推送提交至 {0}",
    "message.acceptedYours": "已接受我的版本用于 {0}",
    "message.acceptedTheirs": "已接受他们的版本用于 {0}",
    "message.conflictOpened": "已为 {0} 打开合并冲突会话",
    "message.mergeConflictsDetected": "合并产生了 {0} 个未解决的冲突文件。已打开冲突会话。",
    "message.noUnresolvedConflicts": "未发现未解决的合并冲突。",
    "label.rollback": "回滚",
    "label.delete": "删除",
    "label.deleteAnyway": "仍然删除",
    "label.rebase": "变基",
    "label.merge": "合并",
    "label.cherryPick": "精选",
    "label.revert": "还原",
    "label.reset": "重置",
    "label.checkout": "检出",
    "label.push": "推送",
    "label.setUpstreamAndPush": "设置上游并推送",
    "label.undo": "撤销",
    "label.drop": "删除",
    "label.ok": "确定",
    "label.close": "关闭",
    "label.mergeButton": "合并...",
    "label.apply": "应用",
    "label.pop": "弹出",
    "label.shelveChanges": "暂存更改",
    "label.commitMessage": "提交消息",
    "label.amend": "修正",
    "label.commit": "提交",
    "label.commitAndPush": "提交并推送...",
    "label.refresh": "刷新",
    "label.refreshing": "正在刷新...",
    "label.groupByDirectory": "按目录分组",
    "label.showDiffPreview": "显示差异预览",
    "label.expandAll": "全部展开",
    "label.collapseAll": "全部折叠",
    "label.acceptYours": "接受我的",
    "label.acceptTheirs": "接受他们的",
    "label.yours": "我的",
    "label.theirs": "他们的",
    "label.name": "名称",
    "label.conflicts": "冲突",
    "label.mergingBranch": "正在合并分支",
    "label.intoBranch": "到分支",
    "label.unresolvedFiles": "{0} 个未解决的文件",
    "label.groupFilesByDirectory": "按目录分组文件",
    "label.incomingBranch": "传入分支",
    "label.currentBranch": "当前分支",
    "label.noCommitSelected": "未选择提交",
    "label.changedFiles": "已更改的文件",
    "label.commitDetails": "提交详情",
    "label.branches": "分支",
    "label.tags": "标签",
    "label.filesChanged": "{0} 个文件已更改",
    "label.noShelvedChanges": "没有暂存的更改",
    "label.loading": "正在加载...",
    "label.noFilesInStash": "此暂存更改中没有文件。",
    "label.shelvedChanges": "暂存的更改",
    "label.coming": "即将推出...",
    "label.newBranchFrom": "从 {0} 创建新分支...",
    "label.pushBranch": "推送...",
    "label.renameBranch": "重命名...",
    "label.update": "更新",
    "label.checkoutBranch": "检出",
    "label.rebaseCurrentOnto": "将 {0} 变基到 {1}",
    "label.mergeIntoCurrent": "将 {0} 合并到 {1}",
    "label.copyRevisionNumber": "复制版本号",
    "label.createPatch": "创建补丁...",
    "label.cherryPickCommit": "精选",
    "label.checkoutRevision": "检出版本",
    "label.resetCurrentBranchToHere": "重置当前分支到此...",
    "label.revertCommit": "还原提交",
    "label.pushAllUpToHere": "推送全部到此位置...",
    "label.undoCommit": "撤销提交...",
    "label.editCommitMessage": "编辑提交消息...",
    "label.dropCommit": "删除提交",
    "label.interactivelyRebaseFromHere": "从此处交互式变基...",
    "label.newBranch": "新分支...",
    "label.newTag": "新标签...",
    "label.pushAvailableOnlyForUnpushed": "推送全部到此位置仅对未推送的提交可用。",
    "label.pushOnlyAvailableForLocalBranch": "推送全部到此位置仅在检出本地分支时可用。",
    "label.commitNotInHistory": "提交 {0} 不在当前分支历史中。",
    "label.noRemoteConfigured": "分支 {0} 未配置远程仓库。",
    "label.noTrackedRemote": "'{0}' 未配置跟踪的远程分支。",
    "label.invalidBranchName": "无效的分支名 '{0}'。名称只能包含字母、数字、点、短横线、下划线或斜杠，且不能以短横线开头。",
    "label.invalidCommitHash": "收到的提交哈希无效。",
    "label.cannotDeleteCheckedOut": "无法删除 '{0}'，因为它当前已被检出。请切换到其他分支后重试。",
    "label.hasUnmergedCommits": "分支 {0} 相对于 {1} 有未合并的提交。仍然删除吗？\n这可能会永久丢失从 {1} 无法访问的提交。",
    "label.deleteAnywayWarning": "分支 '{0}' 有未合并的提交。仍然要删除吗？\n这可能会永久丢失从当前分支无法访问的提交。",
    "label.undoOnlyForUnpushed": "撤销提交仅对未推送的提交可用。",
    "label.undoNotForMergeCommits": "撤销提交不适用于合并提交。",
    "label.editMessageOnlyForUnpushed": "编辑提交消息仅对未推送的提交可用。",
    "label.cannotEditInitialCommit": "编辑提交消息不适用于初始提交。",
    "label.rebaseInteractiveOpened": "交互式变基已打开。请在待办列表中将提交标记为 'reword'。",
    "label.dropOnlyForUnpushed": "删除提交仅对未推送的提交可用。",
    "label.cannotDropInitialCommit": "无法删除仓库的初始提交。",
    "label.vscodeMergeEditorFailed": "VS Code 合并编辑器命令失败 ({0})。改为打开文件。",
    "label.openingFileInstead": "改为打开文件。",
    "label.branchHasNoUpstream": "分支 '{0}' 没有上游。将上游设置为 '{1}' 并推送提交至 {2}？",
    "label.setUpstreamAndPushQuestion": "设置上游并推送",
    "label.pushAllCommitsQuestion": "推送所有提交至 {0} 到 {1}/{2}？",
    "label.rebaseQuestion": "将当前分支变基到 {0}？",
    "label.mergeQuestion": "将 {0} 合并到当前分支？",
    "label.resetQuestion": "硬重置当前分支到 {0}？这将重置索引和工作树，并永久丢弃所有未提交的更改。",
    "label.checkoutCommitQuestion": "检出提交 {0}？这将创建分离的 HEAD 状态。",
    "label.cherryPickQuestion": "精选提交 {0}？",
    "label.revertQuestion": "还原提交 {0}？",
    "label.dropCommitQuestion": "从当前分支历史中删除提交 {0}？",
    "label.undoQuestion": "撤销 {0} 个提交至 {1}（软重置）？",
    "label.changedFilesPlural": "{0} 个更改的文件",
};

translations.en = englishStrings;
translations.zh = chineseStrings;
translations["zh-cn"] = chineseStrings;

function getLocale(): string {
    try {
        const vscode = require("vscode");
        const lang = vscode.env.language;
        if (lang.startsWith("zh")) {
            return lang === "zh-tw" || lang === "zh-hk" ? "zh" : "zh-cn";
        }
        return "en";
    } catch {
        return "en";
    }
}

export function localize(key: LocalizeKey, ...args: (string | number)[]): string {
    const locale = getLocale();
    const strings = translations[locale] || translations.en;
    let template = strings[key] || englishStrings[key] || key;

    for (const arg of args) {
        template = template.replace("{0}", String(arg));
    }

    return template;
}

export function localizePlural(
    key: LocalizeKey,
    count: number,
    ...args: (string | number)[]
): string {
    const locale = getLocale();
    const strings = translations[locale] || translations.en;

    let template: string;
    if (count === 1) {
        template = strings[key.replace(/s$/, "") as LocalizeKey] || englishStrings[key.replace(/s$/, "") as LocalizeKey] || key;
    } else {
        template = strings[key] || englishStrings[key] || key;
    }

    let result = template.replace("{0}", String(count));
    for (let i = 0; i < args.length; i++) {
        result = result.replace(`{${i + 1}}`, String(args[i]));
    }

    return result;
}

export { getLocale };
