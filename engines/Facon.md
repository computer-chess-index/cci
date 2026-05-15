# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-25 | 2049<sub>(+519) | 2338<sub>(+447) | 2404<sub>(+392) |  |
| 1.3 | 2026-04-11 | 1530<sub>(+new) | 1891<sub>(+new) | 2012<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-15 06:24:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4"]
  y-axis "Elo Rating" 1500 --> 2500
  line "STC (8.0+0.08s)" [1530, 2049]
  line "STC (8.0+0.08s)" [1530, 2049]
  line "LTC (60.0+0.60s)" [1891, 2338]
  line "VLTC (2m24s+1.12s)" [2012, 2404]
  line "VLTC (2m24s+1.12s)" [2012, 2404]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2404 | 31 | 378 | 52% | 2381 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2338 | 32 | 360 | 52% | 2311 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2049 | 32 | 348 | 51% | 2036 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2012 | 34 | 324 | 48% | 2029 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1891 | 32 | 364 | 50% | 1889 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1530 | 32 | 378 | 50% | 1524 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |