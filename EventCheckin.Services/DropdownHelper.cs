﻿using System.Collections.Generic;
using EventCheckin.Utility.SharedModels;

namespace EventCheckin.Services
{
    public static class DropdownHelper
    {
        private static List<DropdownViewModel> InitDropdownList(bool includeChooseOption = true, string chooseOptionText = "Select")
        {
            return includeChooseOption
                ? new List<DropdownViewModel> { new DropdownViewModel { Name = chooseOptionText, Value = -1 } }
                : new List<DropdownViewModel>();
        }
        private static List<TreeDropdownModel> InitTree(bool includeChooseOption = true, string chooseOptionText = "Select")
        {
            return includeChooseOption
                ? new List<TreeDropdownModel> { new TreeDropdownModel { Name = chooseOptionText, Value = -1 } }
                : new List<TreeDropdownModel>();
        }
    }
}
