# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3002<sub>(+131) | 3231<sub>(+103) | 3281<sub>(+84) |  |
| 5 | 2026-04-06 | 2871<sub>(+35) | 3128<sub>(+51) | 3197<sub>(+76) |  |
| 4 | 2025-12-05 | 2836 | 3077 | 3121 |  |
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

Generated: 2026-08-06 08:25:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2836, 2871, 3002]
  line "STC (8.0+0.08s)" [2836, 2871, 3002]
  line "LTC (60.0+0.60s)" [3077, 3128, 3231]
  line "VLTC (2m24s+1.12s)" [3121, 3197, 3281]
  line "VLTC (2m24s+1.12s)" [3121, 3197, 3281]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 29 | 312 | 51% | 3270 | 67% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3231 | 30 | 294 | 51% | 3224 | 64% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3002 | 27 | 408 | 47% | 3024 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3197 | 25 | 438 | 48% | 3218 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 28 | 358 | 50% | 3127 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2871 | 28 | 396 | 49% | 2884 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 26 | 428 | 50% | 3121 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3077 | 27 | 376 | 53% | 3050 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2836 | 25 | 482 | 53% | 2804 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |