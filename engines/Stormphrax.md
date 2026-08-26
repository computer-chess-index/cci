# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3399<sub>(+50) | 3546<sub>(+31) | 3579<sub>(+26) |  |
| 7.0.0 | 2025-06-24 | 3349<sub>(+51) | 3515<sub>(+40) | 3553<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3298<sub>(+98) | 3475<sub>(+76) | 3506<sub>(+70) |  |
| 5.0.0 | 2024-06-26 | 3200 | 3399 | 3436 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:29:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3200, 3298, 3349, 3399]
  line "STC (8.0+0.08s)" [3200, 3298, 3349, 3399]
  line "LTC (60.0+0.60s)" [3399, 3475, 3515, 3546]
  line "VLTC (2m24s+1.12s)" [3436, 3506, 3553, 3579]
  line "VLTC (2m24s+1.12s)" [3436, 3506, 3553, 3579]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 28 | 286 | 51% | 3569 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 27 | 320 | 50% | 3544 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3399 | 27 | 356 | 50% | 3399 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 18 | 722 | 51% | 3549 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 17 | 824 | 51% | 3511 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3349 | 17 | 930 | 51% | 3343 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 14 | 1184 | 50% | 3505 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 14 | 1228 | 50% | 3478 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 15 | 1188 | 50% | 3297 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3436 | 32 | 248 | 51% | 3430 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3399 | 27 | 340 | 54% | 3367 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3200 | 29 | 332 | 48% | 3216 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |