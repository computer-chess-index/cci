# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1894<sub>(+169) | 2163<sub>(+158) | 2229<sub>(+141) |  |
| 1.1.0 | 2026-04-21 | 1725<sub>(+79) | 2005<sub>(+126) | 2088<sub>(+139) |  |
| 1.0.0 | 2026-02-20 | 1646<sub>(+103) | 1879<sub>(+77) | 1949<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1543 | 1802 | 1860 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:27:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1543, 1646, 1725, 1894]
  line "STC (8.0+0.08s)" [1543, 1646, 1725, 1894]
  line "LTC (60.0+0.60s)" [1802, 1879, 2005, 2163]
  line "VLTC (2m24s+1.12s)" [1860, 1949, 2088, 2229]
  line "VLTC (2m24s+1.12s)" [1860, 1949, 2088, 2229]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2229 | 31 | 348 | 51% | 2222 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2163 | 36 | 268 | 50% | 2149 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1894 | 32 | 340 | 51% | 1877 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2088 | 32 | 348 | 53% | 2063 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2005 | 33 | 326 | 51% | 1995 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1725 | 32 | 352 | 50% | 1712 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1949 | 29 | 390 | 50% | 1949 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1879 | 31 | 384 | 51% | 1872 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1646 | 30 | 394 | 48% | 1663 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1860 | 41 | 208 | 50% | 1866 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1802 | 36 | 280 | 53% | 1773 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1543 | 39 | 242 | 49% | 1551 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |