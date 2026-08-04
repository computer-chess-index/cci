# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3150<sub>(+38) | 3382<sub>(+20) | 3410<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3112<sub>(+95) | 3362<sub>(+121) | 3384<sub>(+72) |  |
| 3.0 | 2025-12-05 | 3017<sub>(+new) | 3241<sub>(+new) | 3312<sub>(+new) |  |
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

Generated: 2026-08-04 06:24:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3017, 3112, 3150]
  line "STC (8.0+0.08s)" [3017, 3112, 3150]
  line "LTC (60.0+0.60s)" [3241, 3362, 3382]
  line "VLTC (2m24s+1.12s)" [3312, 3384, 3410]
  line "VLTC (2m24s+1.12s)" [3312, 3384, 3410]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3410 | 23 | 436 | 49% | 3416 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 25 | 382 | 50% | 3383 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3150 | 27 | 364 | 51% | 3143 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 29 | 284 | 50% | 3386 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 30 | 280 | 50% | 3359 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3112 | 32 | 264 | 50% | 3109 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3312 | 26 | 368 | 50% | 3313 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 27 | 358 | 52% | 3214 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3017 | 24 | 496 | 52% | 2989 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |