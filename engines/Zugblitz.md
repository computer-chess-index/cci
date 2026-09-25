# Engine: Zugblitz

Author: 

Home: https://github.com/P1X3R/zugblitz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1862<sub>(0) | 2105<sub>(-44) | 2214<sub>(+24) |  |
| 1.3.1 | 2026-01-10 | 1862 | 2149 | 2190 |  |
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

Generated: 2026-09-25 04:44:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1800 --> 2300
  line "" [1862, 1862]
  line "STC (8.0+0.08s)" [1862, 1862]
  line "LTC (60.0+0.60s)" [2149, 2105]
  line "" [2190, 2214]
  line "VLTC (2m24s+1.12s)" [2190, 2214]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2214 | 29 | 376 | 50% | 2221 | 35% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2105 | 29 | 400 | 53% | 2079 | 32% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 1862 | 29 | 410 | 53% | 1825 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2190 | 27 | 456 | 49% | 2199 | 35% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2149 | 28 | 422 | 49% | 2156 | 28% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1862 | 24 | 614 | 51% | 1841 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |