# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3158<sub>(+45) | 3384<sub>(+21) | 3413<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3113<sub>(+94) | 3363<sub>(+119) | 3387<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3019 | 3244 | 3313 |  |
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

Generated: 2026-08-10 07:01:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3019, 3113, 3158]
  line "STC (8.0+0.08s)" [3019, 3113, 3158]
  line "LTC (60.0+0.60s)" [3244, 3363, 3384]
  line "VLTC (2m24s+1.12s)" [3313, 3387, 3413]
  line "VLTC (2m24s+1.12s)" [3313, 3387, 3413]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3413 | 23 | 436 | 49% | 3418 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3384 | 25 | 386 | 50% | 3386 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3158 | 26 | 384 | 51% | 3146 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 29 | 284 | 50% | 3387 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 30 | 280 | 50% | 3362 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3113 | 32 | 264 | 50% | 3110 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3313 | 26 | 368 | 50% | 3316 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3244 | 27 | 358 | 52% | 3216 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3019 | 24 | 496 | 52% | 2990 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |