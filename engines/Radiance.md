# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1709<sub>(+39) | 2063<sub>(+115) | 2182<sub>(+91) |  |
| 4.3 | 2026-03-25 | 1670<sub>(+90) | 1948<sub>(+104) | 2091<sub>(+200) |  |
| 4.2 | 2026-01-17 | 1580<sub>(+new) | 1844<sub>(+new) | 1891<sub>(+new) |  |
| 4.1 | 2025-08-16 |  |  |  |  |
| 4.0.1 | 2025-04-17 |  |  |  |  |
| 4.0 | 2025-04-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:27:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1580, 1670, 1709]
  line "STC (8.0+0.08s)" [1580, 1670, 1709]
  line "LTC (60.0+0.60s)" [1844, 1948, 2063]
  line "VLTC (2m24s+1.12s)" [1891, 2091, 2182]
  line "VLTC (2m24s+1.12s)" [1891, 2091, 2182]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2182 | 33 | 326 | 49% | 2179 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2063 | 31 | 378 | 52% | 2037 | 23% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1709 | 31 | 396 | 49% | 1712 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2091 | 30 | 412 | 54% | 2051 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1948 | 31 | 362 | 49% | 1958 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1670 | 32 | 360 | 49% | 1678 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1891 | 36 | 304 | 45% | 1983 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1844 | 39 | 246 | 47% | 1899 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1580 | 34 | 328 | 45% | 1656 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |