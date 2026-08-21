# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3006<sub>(+129) | 3236<sub>(+101) | 3282<sub>(+78) |  |
| 5 | 2026-04-06 | 2877<sub>(+35) | 3135<sub>(+53) | 3204<sub>(+77) |  |
| 4 | 2025-12-05 | 2842 | 3082 | 3127 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A2to6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:24:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2842, 2877, 3006]
  line "STC (8.0+0.08s)" [2842, 2877, 3006]
  line "LTC (60.0+0.60s)" [3082, 3135, 3236]
  line "VLTC (2m24s+1.12s)" [3127, 3204, 3282]
  line "VLTC (2m24s+1.12s)" [3127, 3204, 3282]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3282 | 28 | 332 | 50% | 3279 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3236 | 29 | 318 | 51% | 3232 | 64% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3006 | 26 | 420 | 47% | 3028 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3204 | 25 | 438 | 48% | 3225 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3135 | 28 | 358 | 50% | 3133 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2877 | 28 | 396 | 49% | 2889 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3127 | 26 | 428 | 50% | 3127 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3082 | 27 | 376 | 53% | 3056 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2842 | 25 | 482 | 53% | 2809 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |