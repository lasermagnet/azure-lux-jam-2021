import {
gPlayFabCachedData,
gPFConst,
PlayFab_GetPlayFabID,
PlayFab_ResetPlayFabID,
PlayFab_GetDisplayName,
PlayFab_UpdateDisplayName,
PlayFab_UserData,
PlayFab_Error,
PlayFab_GetLeaderboardItem,
PlayFab_GetLeaderboardCount,
PlayFab_GetAccountInfoUserName,
PlayFab_LoginWithCustomID,
PlayFab_RegisterUser,
PlayFab_LoginWithEmail,
PlayFab_LoginWithPlayFab,
PlayFab_GetUserData,
PlayFab_UpdateUserData,
PlayFab_UpdatePlayerStatistics,
PlayFab_GetLeaderboard,
PlayFab_AddUsernamePassword,
PlayFab_GetAccountInfo,
PlayFab_LogSDKDetails,
CompileErrorReport
} from "./PlayFab.js";


const scriptsInEvents = {

		async Eplayfab_Event1_Act1(runtime, localVars)
		{
			await PlayFab_GetLeaderboard(localVars.paramCount, runtime.globalVars.gPlayFabHighScoreTableName);
		},

		async Eplayfab_Event2_Act1(runtime, localVars)
		{
			localVars.localLeaderboardCount = PlayFab_GetLeaderboardCount();
		},

		async Eplayfab_Event5_Act2(runtime, localVars)
		{
			localVars.localStatName = PlayFab_GetLeaderboardItem(localVars.localIndex,"name");
			localVars.localStatScore = PlayFab_GetLeaderboardItem(localVars.localIndex,"score");
		},

		async Eplayfab_Event7_Act1(runtime, localVars)
		{
			await PlayFab_UpdatePlayerStatistics(runtime.globalVars.gPlayFabHighScoreTableName,localVars.paramScore);
		},

		async Eplayfab_Event8_Act1(runtime, localVars)
		{
			await PlayFab_GetUserData(localVars.paramUserDataID);
		},

		async Eplayfab_Event10_Act1(runtime, localVars)
		{
			await PlayFab_UpdateUserData(localVars.paramUserDataID, localVars.paramDataString);
		},

		async Eplayfab_Event12_Act1(runtime, localVars)
		{
			await PlayFab_UpdateDisplayName(localVars.paramDisplayName);
		},

		async Eplayfab_Event14_Act1(runtime, localVars)
		{
			localVars.localPlayFabId = PlayFab_GetPlayFabID();
			
		},

		async Eplayfab_Event16_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_UserData(localVars.paramUserDataID);
			
		},

		async Eplayfab_Event18_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_GetDisplayName();
		},

		async Eplayfab_Event19_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_GetPlayFabID();
		},

		async Eplayfab_Event22_Act1(runtime, localVars)
		{
			await PlayFab_RegisterUser(runtime.globalVars.kPlayFabTitleID, localVars.paramUsername, localVars.paramEmail, localVars.paramPassword, localVars.paramUsername);
		},

		async Eplayfab_Event24_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_Error("RegisterPlayFabUser");
		},

		async Eplayfab_Event26_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_Error("LoginWithXXX");
		},

		async Eplayfab_Event31_Act1(runtime, localVars)
		{
			await PlayFab_AddUsernamePassword(localVars.paramEmail, localVars.paramPassword, localVars.paramUsername);
		},

		async Eplayfab_Event33_Act1(runtime, localVars)
		{
			await PlayFab_LoginWithCustomID(runtime.globalVars.kPlayFabTitleID, localVars.paramPlayFabID,true);
		},

		async Eplayfab_Event34_Act1(runtime, localVars)
		{
			await PlayFab_LoginWithEmail(runtime.globalVars.kPlayFabTitleID, localVars.paramEmail, localVars.paramPassword);
		},

		async Eplayfab_Event35_Act1(runtime, localVars)
		{
			await PlayFab_LoginWithPlayFab(runtime.globalVars.kPlayFabTitleID, localVars.paramUsername, localVars.paramPassword);
		},

		async Eplayfab_Event36_Act1(runtime, localVars)
		{
			PlayFab_ResetPlayFabID();
		},

		async Eplayfab_Event38_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_Error("GetAccountInfo");
		},

		async Eplayfab_Event40_Act1(runtime, localVars)
		{
			PlayFab_LogSDKDetails();
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

