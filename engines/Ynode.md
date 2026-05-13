# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3178<sub>(-13) | 3379<sub>(+9) | 3441<sub>(+24) |  |
| 0219 | 2025-11-16 | 3191<sub>(+new) | 3370<sub>(+new) | 3417<sub>(+new) |  |
| 0215 | 2025-09-28 |  |  |  |  |
| 0213 | 2025-08-24 |  |  |  |  |
| 0144 | 2025-08-01 |  |  |  |  |
| 0177 | 2025-08-01 |  |  |  |  |
| 0189 | 2025-08-01 |  |  |  |  |
| 0194 | 2025-08-01 |  |  |  |  |
| 0204 | 2025-08-01 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-13 06:31:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3191, 3178]
  line "STC (8.0+0.08s)" [3191, 3178]
  line "LTC (60.0+0.60s)" [3370, 3379]
  line "VLTC (2m24s+1.12s)" [3417, 3441]
  line "VLTC (2m24s+1.12s)" [3417, 3441]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 28 | 310 | 49% | 3445 | 81% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 28 | 312 | 50% | 3382 | 75% |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3178 | 28 | 342 | 50% | 3182 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 27 | 336 | 52% | 3393 | 79% |
| 0219 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 25 | 406 | 49% | 3363 | 72% |
| 0219 | STC <sub>(8.0+0.08s)</sub> | 3191 | 24 | 490 | 53% | 3146 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |