# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3151<sub>(+39) | 3383<sub>(+21) | 3411<sub>(+25) |  |
| 4.0 | 2026-04-18 | 3112<sub>(+95) | 3362<sub>(+119) | 3386<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3017<sub>(+new) | 3243<sub>(+new) | 3312<sub>(+new) |  |
| 2.0 | 2025-08-23 |  |  |  |  |
| 1.0 | 2025-06-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 06:24:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3017, 3112, 3151]
  line "STC (8.0+0.08s)" [3017, 3112, 3151]
  line "LTC (60.0+0.60s)" [3243, 3362, 3383]
  line "VLTC (2m24s+1.12s)" [3312, 3386, 3411]
  line "VLTC (2m24s+1.12s)" [3312, 3386, 3411]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 23 | 436 | 49% | 3417 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3383 | 25 | 386 | 50% | 3384 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3151 | 27 | 368 | 51% | 3144 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3386 | 29 | 284 | 50% | 3386 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 30 | 280 | 50% | 3360 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3112 | 32 | 264 | 50% | 3109 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3312 | 26 | 368 | 50% | 3313 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3243 | 27 | 358 | 52% | 3214 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3017 | 24 | 496 | 52% | 2989 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |