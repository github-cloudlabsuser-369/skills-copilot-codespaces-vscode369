# Install the Azure module
if(-not (Get-Module -Name Az -ListAvailable)) {
    Install-Module -Name Az -AllowClobber -Scope CurrentUser
}

# Import the Azure module
Import-Module Az

 #Login to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "myResourceGroup"
$location = "westeurope"
$storageAccountName = "mystorageaccount"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName Standard_LRS `
  -Kind StorageV2