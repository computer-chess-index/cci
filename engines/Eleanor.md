# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3160<sub>(+44) | 3387<sub>(+20) | 3416<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3116<sub>(+95) | 3367<sub>(+120) | 3390<sub>(+73) |  |
| 3.0 | 2025-12-05 | 3021 | 3247 | 3317 |  |
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

Generated: 2026-08-18 06:24:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3021, 3116, 3160]
  line "STC (8.0+0.08s)" [3021, 3116, 3160]
  line "LTC (60.0+0.60s)" [3247, 3367, 3387]
  line "VLTC (2m24s+1.12s)" [3317, 3390, 3416]
  line "VLTC (2m24s+1.12s)" [3317, 3390, 3416]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 23 | 448 | 49% | 3421 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3387 | 25 | 386 | 50% | 3389 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3160 | 26 | 392 | 51% | 3150 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 29 | 284 | 50% | 3391 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 30 | 280 | 50% | 3364 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3116 | 32 | 264 | 50% | 3113 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3317 | 26 | 368 | 50% | 3318 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3247 | 27 | 358 | 52% | 3220 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3021 | 24 | 496 | 52% | 2993 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |