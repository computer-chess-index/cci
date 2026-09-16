# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-08-28 | 2634<sub>(+new) | 2969<sub>(+new) | 3040<sub>(+new) |  |
| 1.2.0 | 2026-07-30 |  |  |  |  |
| 1.1.2 | 2026-07-08 | 2350<sub>(+new) | 2792<sub>(+new) | 2869<sub>(+new) |  |
| 1.1.1 | 2026-07-04 |  |  |  |  |
| 1.1.0 | 2026-06-26 |  |  |  |  |
| 1.0.0 | 2026-06-17 |  |  |  |  |
| 0.9.5 | 2026-06-14 |  |  |  |  |
| 0.9.4 | 2026-06-04 |  |  |  |  |
| 0.9.3 | 2026-06-03 |  |  |  |  |
| 0.9.2 | 2026-06-01 |  |  |  |  |
| 0.9.1 | 2026-05-31 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ember+<version>&body=###%20Engine%20name%0AEmber%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:37:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.2", "1.3.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "" [2350, 2634]
  line "STC (8.0+0.08s)" [2350, 2634]
  line "LTC (60.0+0.60s)" [2792, 2969]
  line "" [2869, 3040]
  line "VLTC (2m24s+1.12s)" [2869, 3040]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3040 | 34 | 236 | 51% | 3035 | 53% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2969 | 32 | 292 | 53% | 2942 | 45% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2634 | 36 | 252 | 53% | 2610 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 31 | 330 | 50% | 2863 | 41% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2792 | 31 | 332 | 51% | 2769 | 38% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2350 | 33 | 316 | 49% | 2354 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |