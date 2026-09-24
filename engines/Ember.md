# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-09-18 | 2824<sub>(+191) | 3174<sub>(+203) | 3262<sub>(+214) |  |
| 1.3.0 | 2026-08-28 | 2633<sub>(+new) | 2971<sub>(+new) | 3048<sub>(+new) |  |
| 1.2.0 | 2026-07-30 |  |  |  |  |
| 1.1.2 | 2026-07-08 | 2353<sub>(+new) | 2795<sub>(+new) | 2871<sub>(+new) |  |
| 1.1.1 | 2026-07-04 |  |  |  |  |
| 1.1.0 | 2026-06-26 |  |  |  |  |
| 1.0.0 | 2026-06-17 |  |  |  |  |
| 0.9.5 | 2026-06-14 |  |  |  |  |
| 0.9.4 | 2026-06-04 |  |  |  |  |
| 0.9.3 | 2026-06-03 |  |  |  |  |
| 0.9.2 | 2026-06-01 |  |  |  |  |
| 0.9.1 | 2026-05-31 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ember+<version>&body=###%20Engine%20name%0AEmber%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:37:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.2", "1.3.0", "1.3.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2353, 2633, 2824]
  line "STC (8.0+0.08s)" [2353, 2633, 2824]
  line "LTC (60.0+0.60s)" [2795, 2971, 3174]
  line "" [2871, 3048, 3262]
  line "VLTC (2m24s+1.12s)" [2871, 3048, 3262]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3262 | 108 | 22 | 59% | 3181 | 64% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3174 | 95 | 32 | 66% | 3048 | 50% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2824 | 75 | 52 | 56% | 2776 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3048 | 33 | 256 | 51% | 3040 | 53% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2971 | 32 | 296 | 53% | 2944 | 45% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2633 | 35 | 264 | 52% | 2618 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 31 | 330 | 50% | 2866 | 41% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2795 | 31 | 332 | 51% | 2770 | 38% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2353 | 33 | 316 | 49% | 2357 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |