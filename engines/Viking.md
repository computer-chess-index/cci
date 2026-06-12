# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1922<sub>(+580) | 2171<sub>(+347) | 2336<sub>(+227) |  |
| R4 | 2026-04-22 | 1342<sub>(+new) | 1824<sub>(+new) | 2109<sub>(+new) |  |
| R3 | 2026-04-22 |  |  |  |  |
| R2 | 2025-09-25 |  |  |  |  |
| R1 | 2025-09-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-12 06:29:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "STC (8.0+0.08s)" [1342, 1922]
  line "STC (8.0+0.08s)" [1342, 1922]
  line "LTC (60.0+0.60s)" [1824, 2171]
  line "VLTC (2m24s+1.12s)" [2109, 2336]
  line "VLTC (2m24s+1.12s)" [2109, 2336]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2336 | 30 | 366 | 49% | 2344 | 34% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 30 | 370 | 52% | 2145 | 29% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1922 | 29 | 426 | 51% | 1904 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2109 | 31 | 372 | 41% | 2219 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1824 | 36 | 298 | 46% | 1893 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1342 | 38 | 288 | 47% | 1405 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |