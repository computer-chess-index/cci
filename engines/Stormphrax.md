# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3393<sub>(+46) | 3544<sub>(+33) | 3576<sub>(+27) |  |
| 7.0.0 | 2025-06-24 | 3347<sub>(+53) | 3511<sub>(+40) | 3549<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3294<sub>(+99) | 3471<sub>(+76) | 3502<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3195 | 3395 | 3433 |  |
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

Generated: 2026-08-21 06:31:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3195, 3294, 3347, 3393]
  line "STC (8.0+0.08s)" [3195, 3294, 3347, 3393]
  line "LTC (60.0+0.60s)" [3395, 3471, 3511, 3544]
  line "VLTC (2m24s+1.12s)" [3433, 3502, 3549, 3576]
  line "VLTC (2m24s+1.12s)" [3433, 3502, 3549, 3576]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 28 | 282 | 51% | 3567 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 27 | 316 | 50% | 3541 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3393 | 27 | 344 | 50% | 3395 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 18 | 722 | 51% | 3546 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3511 | 17 | 824 | 51% | 3507 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3347 | 17 | 930 | 51% | 3339 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 14 | 1184 | 50% | 3501 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 14 | 1228 | 50% | 3474 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3294 | 15 | 1188 | 50% | 3293 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 32 | 248 | 51% | 3426 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 27 | 340 | 54% | 3363 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3195 | 29 | 332 | 48% | 3212 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |