# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3015<sub>(+131) | 3225<sub>(+84) | 3294<sub>(+84) |  |
| 5 | 2026-04-06 | 2884<sub>(+35) | 3141<sub>(+54) | 3210<sub>(+77) |  |
| 4 | 2025-12-05 | 2849 | 3087 | 3133 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A2to6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:23:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "" [2849, 2884, 3015]
  line "STC (8.0+0.08s)" [2849, 2884, 3015]
  line "LTC (60.0+0.60s)" [3087, 3141, 3225]
  line "" [3133, 3210, 3294]
  line "VLTC (2m24s+1.12s)" [3133, 3210, 3294]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 26 | 372 | 51% | 3285 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3225 | 26 | 400 | 49% | 3236 | 61% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3015 | 25 | 456 | 48% | 3033 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3210 | 25 | 438 | 48% | 3232 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3141 | 28 | 358 | 50% | 3139 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2884 | 28 | 396 | 49% | 2896 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3133 | 26 | 428 | 50% | 3133 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3087 | 27 | 376 | 53% | 3062 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2849 | 25 | 482 | 53% | 2816 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |