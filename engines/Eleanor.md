# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3208<sub>(+37) | 3440<sub>(+20) | 3470<sub>(+27) |  |
| 4.0 | 2026-04-18 | 3171<sub>(+94) | 3420<sub>(+119) | 3443<sub>(+75) |  |
| 3.0 | 2025-12-05 | 3077<sub>(+new) | 3301<sub>(+new) | 3368<sub>(+new) |  |
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

Generated: 2026-05-06 06:24:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3077, 3171, 3208]
  line "STC (8.0+0.08s)" [3077, 3171, 3208]
  line "LTC (60.0+0.60s)" [3301, 3420, 3440]
  line "VLTC (2m24s+1.12s)" [3368, 3443, 3470]
  line "VLTC (2m24s+1.12s)" [3368, 3443, 3470]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 27 | 316 | 49% | 3479 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 29 | 292 | 49% | 3444 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3208 | 31 | 284 | 50% | 3205 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 29 | 284 | 50% | 3444 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 30 | 280 | 50% | 3417 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3171 | 32 | 264 | 50% | 3168 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 26 | 368 | 50% | 3371 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3301 | 27 | 358 | 52% | 3272 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3077 | 24 | 496 | 52% | 3048 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |