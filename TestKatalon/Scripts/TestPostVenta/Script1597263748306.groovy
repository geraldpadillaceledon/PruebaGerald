import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.exception.StepErrorException
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

WebUI.openBrowser('')

WebUI.navigateToUrl('http://52.224.253.159/wwrecinto.aspx')
WebUI.delay(5)
//WebUI.click(findTestObject('Titulo'))
TextoTitulo = WebUI.getText(findTestObject('Titulo'))

println(TextoTitulo)
if (TextoTitulo == 'Post Venta Corp (QAS) - Mensaje Ejemplo para nueva versión'){
	println('Ejecución exitosa')
}else{
WebUI.closeBrowser()
throw new StepErrorException('Se ha detectado error, no se ha encontrado el texto indicado.')
}

WebUI.closeBrowser()

