# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3008<sub>(+128) | 3227<sub>(+90) | 3286<sub>(+80) |  |
| 5 | 2026-04-06 | 2880<sub>(+37) | 3137<sub>(+54) | 3206<sub>(+77) |  |
| 4 | 2025-12-05 | 2843 | 3083 | 3129 |  |
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

Generated: 2026-08-23 06:24:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2843, 2880, 3008]
  line "STC (8.0+0.08s)" [2843, 2880, 3008]
  line "LTC (60.0+0.60s)" [3083, 3137, 3227]
  line "VLTC (2m24s+1.12s)" [3129, 3206, 3286]
  line "VLTC (2m24s+1.12s)" [3129, 3206, 3286]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3286 | 28 | 336 | 51% | 3281 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3227 | 27 | 354 | 49% | 3233 | 61% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3008 | 26 | 428 | 47% | 3031 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3206 | 25 | 438 | 48% | 3228 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3137 | 28 | 358 | 50% | 3135 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2880 | 28 | 396 | 49% | 2892 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3129 | 26 | 428 | 50% | 3129 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3083 | 27 | 376 | 53% | 3058 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2843 | 25 | 482 | 53% | 2812 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |