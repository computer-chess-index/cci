# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3394<sub>(+14) | 3541<sub>(+12) | 3573<sub>(-6) |  |
| 1.0 | 2025-01-08 | 3380 | 3529 | 3579 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 08:15:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3380, 3394]
  line "STC (8.0+0.08s)" [3380, 3394]
  line "LTC (60.0+0.60s)" [3529, 3541]
  line "VLTC (2m24s+1.12s)" [3579, 3573]
  line "VLTC (2m24s+1.12s)" [3579, 3573]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 17 | 816 | 50% | 3572 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 17 | 834 | 50% | 3538 | 83% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3394 | 16 | 930 | 50% | 3395 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 28 | 304 | 49% | 3584 | 86% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 26 | 348 | 51% | 3521 | 85% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3380 | 29 | 292 | 49% | 3384 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |