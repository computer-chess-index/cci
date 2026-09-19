# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2911<sub>(+95) | 3179<sub>(+31) | 3282<sub>(+66) |  |
| 2.1 | 2026-04-08 | 2816<sub>(+310) | 3148<sub>(+297) | 3216<sub>(+284) |  |
| 2.0 | 2026-03-18 | 2506 | 2851 | 2932 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tunguska+<version>&body=###%20Engine%20name%0ATunguska%0A%0A###%20Version%0A2.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-19 04:43:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2506, 2816, 2911]
  line "STC (8.0+0.08s)" [2506, 2816, 2911]
  line "LTC (60.0+0.60s)" [2851, 3148, 3179]
  line "" [2932, 3216, 3282]
  line "VLTC (2m24s+1.12s)" [2932, 3216, 3282]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3282 | 30 | 280 | 50% | 3282 | 68% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 34 | 236 | 50% | 3181 | 61% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2911 | 34 | 244 | 50% | 2915 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 24 | 488 | 50% | 3212 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3148 | 24 | 458 | 52% | 3131 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2816 | 23 | 540 | 48% | 2834 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 30 | 356 | 51% | 2916 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2851 | 31 | 328 | 50% | 2844 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2506 | 31 | 368 | 50% | 2499 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |