# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5 | 2026-04-06 | 2934<sub>(+34) | 3191<sub>(+51) | 3255<sub>(+70) |  |
| 4 | 2025-12-05 | 2900<sub>(+new) | 3140<sub>(+new) | 3185<sub>(+new) |  |
| 3 | 2025-09-27 |  |  |  |  |
| 2 | 2025-09-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:23:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5"]
  y-axis "Elo Rating" 2900 --> 3300
  line "STC (8.0+0.08s)" [2900, 2934]
  line "STC (8.0+0.08s)" [2900, 2934]
  line "LTC (60.0+0.60s)" [3140, 3191]
  line "VLTC (2m24s+1.12s)" [3185, 3255]
  line "VLTC (2m24s+1.12s)" [3185, 3255]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3255 | 27 | 386 | 47% | 3281 | 60% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3191 | 30 | 294 | 50% | 3191 | 57% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2934 | 30 | 336 | 49% | 2948 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3185 | 26 | 428 | 50% | 3185 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3140 | 27 | 376 | 53% | 3114 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2900 | 25 | 482 | 53% | 2867 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |