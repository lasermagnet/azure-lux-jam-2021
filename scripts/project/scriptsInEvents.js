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

		async Fnsplayfab_Event1_Act1(runtime, localVars)
		{
			await PlayFab_GetLeaderboard(localVars.paramCount, localVars.paramLeaderboardName);
		},

		async Fnsplayfab_Event2_Act1(runtime, localVars)
		{
			localVars.localLeaderboardCount = PlayFab_GetLeaderboardCount();
		},

		async Fnsplayfab_Event5_Act2(runtime, localVars)
		{
			localVars.localStatName = PlayFab_GetLeaderboardItem(localVars.localIndex,"name");
			localVars.localStatScore = PlayFab_GetLeaderboardItem(localVars.localIndex,"score");
		},

		async Fnsplayfab_Event7_Act2(runtime, localVars)
		{
			await PlayFab_UpdatePlayerStatistics(localVars.paramLeaderboardName, localVars.paramScore);
		},

		async Fnsplayfab_Event8_Act1(runtime, localVars)
		{
			await PlayFab_GetUserData(localVars.paramUserDataID);
		},

		async Fnsplayfab_Event10_Act1(runtime, localVars)
		{
			await PlayFab_UpdateUserData(localVars.paramUserDataID, localVars.paramDataString);
		},

		async Fnsplayfab_Event12_Act1(runtime, localVars)
		{
			await PlayFab_UpdateDisplayName(localVars.paramDisplayName);
		},

		async Fnsplayfab_Event14_Act1(runtime, localVars)
		{
			localVars.localPlayFabId = PlayFab_GetPlayFabID();
			
		},

		async Fnsplayfab_Event16_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_UserData(localVars.paramUserDataID);
			
		},

		async Fnsplayfab_Event18_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_GetDisplayName();
		},

		async Fnsplayfab_Event19_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_GetPlayFabID();
		},

		async Fnsplayfab_Event22_Act1(runtime, localVars)
		{
			await PlayFab_RegisterUser(runtime.globalVars.kPlayFabTitleID, localVars.paramUsername, localVars.paramEmail, localVars.paramPassword, localVars.paramUsername);
		},

		async Fnsplayfab_Event24_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_Error("RegisterPlayFabUser");
		},

		async Fnsplayfab_Event26_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_Error("LoginWithXXX");
		},

		async Fnsplayfab_Event31_Act1(runtime, localVars)
		{
			await PlayFab_AddUsernamePassword(localVars.paramEmail, localVars.paramPassword, localVars.paramUsername);
		},

		async Fnsplayfab_Event33_Act1(runtime, localVars)
		{
			await PlayFab_LoginWithCustomID(runtime.globalVars.kPlayFabTitleID, localVars.paramPlayFabID,true);
		},

		async Fnsplayfab_Event34_Act1(runtime, localVars)
		{
			await PlayFab_LoginWithEmail(runtime.globalVars.kPlayFabTitleID, localVars.paramEmail, localVars.paramPassword);
		},

		async Fnsplayfab_Event35_Act1(runtime, localVars)
		{
			await PlayFab_LoginWithPlayFab(runtime.globalVars.kPlayFabTitleID, localVars.paramUsername, localVars.paramPassword);
		},

		async Fnsplayfab_Event36_Act1(runtime, localVars)
		{
			PlayFab_ResetPlayFabID();
		},

		async Fnsplayfab_Event38_Act1(runtime, localVars)
		{
			localVars.localData = PlayFab_Error("GetAccountInfo");
		},

		async Fnsplayfab_Event40_Act1(runtime, localVars)
		{
			PlayFab_LogSDKDetails();
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

