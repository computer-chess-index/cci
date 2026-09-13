# Engine: Zugblitz

Author: 

Home: https://github.com/P1X3R/zugblitz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1858<sub>(-1) | 2102<sub>(-45) | 2211<sub>(+24) |  |
| 1.3.1 | 2026-01-10 | 1859 | 2147 | 2187 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zugblitz+<version>&body=###%20Engine%20name%0AZugblitz%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-13 04:43:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1800 --> 2300
  line "" [1859, 1858]
  line "STC (8.0+0.08s)" [1859, 1858]
  line "LTC (60.0+0.60s)" [2147, 2102]
  line "" [2187, 2211]
  line "VLTC (2m24s+1.12s)" [2187, 2211]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2211 | 29 | 376 | 50% | 2218 | 35% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2102 | 29 | 400 | 53% | 2075 | 32% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 1858 | 29 | 394 | 52% | 1839 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2187 | 27 | 456 | 49% | 2195 | 35% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2147 | 28 | 422 | 49% | 2152 | 28% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1859 | 24 | 614 | 51% | 1837 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |