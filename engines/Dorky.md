# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-08-21 | 2311<sub>(+73) | 2647<sub>(+140) | 2747<sub>(+106) |  |
| 5.0 | 2026-08-08 | 2238 | 2507 | 2641 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dorky+<version>&body=###%20Engine%20name%0ADorky%0A%0A###%20Version%0A5.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 04:34:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "5.1"]
  y-axis "Elo Rating" 2200 --> 2800
  line "" [2238, 2311]
  line "STC (8.0+0.08s)" [2238, 2311]
  line "LTC (60.0+0.60s)" [2507, 2647]
  line "" [2641, 2747]
  line "VLTC (2m24s+1.12s)" [2641, 2747]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2747 | 32 | 304 | 52% | 2730 | 38% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2647 | 33 | 300 | 53% | 2624 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2311 | 39 | 208 | 51% | 2303 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2641 | 34 | 298 | 48% | 2662 | 27% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2507 | 37 | 246 | 50% | 2473 | 29% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2238 | 32 | 336 | 50% | 2223 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |