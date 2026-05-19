# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3160<sub>(+33) | 3394<sub>(+19) | 3425<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3127<sub>(+95) | 3375<sub>(+119) | 3399<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3032<sub>(+new) | 3256<sub>(+new) | 3325<sub>(+new) |  |
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

Generated: 2026-05-19 06:24:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3032, 3127, 3160]
  line "STC (8.0+0.08s)" [3032, 3127, 3160]
  line "LTC (60.0+0.60s)" [3256, 3375, 3394]
  line "VLTC (2m24s+1.12s)" [3325, 3399, 3425]
  line "VLTC (2m24s+1.12s)" [3325, 3399, 3425]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 26 | 344 | 49% | 3433 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 28 | 308 | 49% | 3399 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3160 | 29 | 308 | 50% | 3159 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 29 | 284 | 50% | 3399 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 30 | 280 | 50% | 3372 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 32 | 264 | 50% | 3124 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3325 | 26 | 368 | 50% | 3326 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3256 | 27 | 358 | 52% | 3229 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3032 | 24 | 496 | 52% | 3004 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |