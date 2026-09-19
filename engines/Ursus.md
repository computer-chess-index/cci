# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3097<sub>(+24) | 3378<sub>(+102) | 3405<sub>(+52) |  |
| 1.0.1 | 2026-07-27 | 3073<sub>(+2) | 3276<sub>(-23) | 3353<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3071 | 3299 | 3349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-19 04:43:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3071, 3073, 3097]
  line "STC (8.0+0.08s)" [3071, 3073, 3097]
  line "LTC (60.0+0.60s)" [3299, 3276, 3378]
  line "" [3349, 3353, 3405]
  line "VLTC (2m24s+1.12s)" [3349, 3353, 3405]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 38 | 172 | 51% | 3397 | 73% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3378 | 39 | 168 | 51% | 3372 | 69% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3097 | 35 | 220 | 48% | 3117 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3353 | 37 | 184 | 48% | 3364 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3276 | 37 | 184 | 49% | 3281 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3073 | 46 | 132 | 52% | 3060 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3349 | 40 | 160 | 55% | 3303 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3299 | 40 | 166 | 55% | 3248 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3071 | 49 | 120 | 55% | 3019 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |