# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3208<sub>(+40) | 3437<sub>(+19) | 3468<sub>(+27) |  |
| 4.0 | 2026-04-18 | 3168<sub>(+93) | 3418<sub>(+119) | 3441<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3075<sub>(+new) | 3299<sub>(+new) | 3367<sub>(+new) |  |
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

Generated: 2026-05-04 06:24:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3075, 3168, 3208]
  line "STC (8.0+0.08s)" [3075, 3168, 3208]
  line "LTC (60.0+0.60s)" [3299, 3418, 3437]
  line "VLTC (2m24s+1.12s)" [3367, 3441, 3468]
  line "VLTC (2m24s+1.12s)" [3367, 3441, 3468]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3468 | 28 | 312 | 48% | 3478 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 30 | 268 | 49% | 3444 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3208 | 31 | 276 | 50% | 3204 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 29 | 284 | 50% | 3443 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 30 | 280 | 50% | 3416 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3168 | 32 | 264 | 50% | 3167 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3367 | 26 | 368 | 50% | 3370 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3299 | 27 | 358 | 52% | 3271 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3075 | 24 | 496 | 52% | 3047 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |