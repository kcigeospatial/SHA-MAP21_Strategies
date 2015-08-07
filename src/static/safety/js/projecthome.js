function cursorHand()
{
cursor:hand;
}

function openCOUNTY(id)
{
  selectCNTY = document.getElementById(id).selectedIndex;
  gotoURL = document.getElementById(id).options[selectCNTY].value;
  top.location.href = gotoURL;
}

function definition(type)
{
// Definition of the Planning Phase
	varPlan = "Planning Phase – Also known as Project Planning involves the following:"
	varPlan = varPlan + "\n" + "• Develop engineering alternatives to satisfy a need or deficiency."
	varPlan = varPlan + "\n" + "• Evaluate and document socio-economic and natural environmental impacts associated with each engineering alternative."
	varPlan = varPlan + "\n" + "• Prepare preliminary cost estimates for each engineering alternative."
	varPlan = varPlan + "\n" + "• Involve the public as well as Federal, State and Local Government Agencies in development and evaluation of an engineering solution."
	varPlan = varPlan + "\n" + "• Obtain Federal Highway Administration approval on the Environmental Document and approval by the State Highway Administrator on the design of the selected alternative."

// Definition of the Engineering Phase
	varEng = "Engineering Phase – Also known as Preliminary Engineering/Final Design involves the following:"
	varEng = varEng + "\n" + "• Perform detailed Engineering of the Selected Alternative from Project Planning along with Project Specifications and detailed cost estimates."
	varEng = varEng + "\n" + "• Conduct field surveys to locate topography and locate and verify property line data."
	varEng = varEng + "\n" + "• Prepare Final reports for Wetland impact and mitigation, Hydraulics and Hydrology, Storm Water Management, Erosion and Sediment control and Traffic control."
	varEng = varEng + "\n" + "• Re-Evaluate Environmental Impacts in compliance to commitments made during Project Planning."
	varEng = varEng + "\n" + "• Evaluate efforts to further minimize potential Environmental Impacts."
	varEng = varEng + "\n" + "• Conduct Field survey of project centerline."
	varEng = varEng + "\n" + "• Prepare Right-of-Way plats."
	varEng = varEng + "\n" + "• Conduct soil borings for roadway structures and environmental issues."
	varEng = varEng + "\n" + "• Establish pavement design."
	varEng = varEng + "\n" + "• Select bridge foundation type."
	varEng = varEng + "\n" + "• Develop storm water management as well as erosion and sediment control plans."
	varEng = varEng + "\n" + "• Obtain Environmental Permits for wetland impacts, erosion and sediment control plans and storm water management plans."

// Definition of the Right-of-Way Phase
	varRow = "Right-of-Way Phase – involves the following:"
	varRow = varRow + "\n" + "• Appraisal of the property needed for the project."
	varRow = varRow + "\n" + "• Acquisition of the needed property."
	varRow = varRow + "\n" + "• Provide relocation assistance to property owners and tenants displaced by the project."

// Definition of the Construction Phase
	varConst = "Construction Phase – involves the following:"
	varConst = varConst + "\n" + "• Conduct the Advertisement, Bid Opening and Award process for construction activities."
	varConst = varConst + "\n" + "• Perform Construction Management and Inspection to assure compliance with design plans and specifications."
	varConst = varConst + "\n" + "• Review and approve shop drawings."
	varConst = varConst + "\n" + "• Conduct tests on all materials used in construction to make sure they conform to contract specifications."

	if(type == 1)
	{
		alert(varPlan);
		return false;
	}
	else if(type == 2)
	{
		alert(varEng);
		return false;
	}
	else if(type == 3)
	{
		alert(varRow);
		return false;
	}
	else if(type == 4)
	{
		alert(varConst);
		return false;
	}
	return true;
}
//-->
