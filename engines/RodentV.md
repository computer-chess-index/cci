# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-08-30 |  |  |  |  |
| 1.1 | 2026-08-06 | 2990<sub>(+50) | 3258<sub>(+56) | 3306<sub>(+13) |  |
| 1.0 | 2026-08-02 | 2940 | 3202 | 3293 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RodentV+<version>&body=###%20Engine%20name%0ARodentV%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:42:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2940, 2990]
  line "STC (8.0+0.08s)" [2940, 2990]
  line "LTC (60.0+0.60s)" [3202, 3258]
  line "" [3293, 3306]
  line "VLTC (2m24s+1.12s)" [3293, 3306]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3306 | 29 | 292 | 50% | 3306 | 71% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3258 | 27 | 370 | 53% | 3235 | 61% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2990 | 27 | 404 | 53% | 2944 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 33 | 250 | 49% | 3295 | 61% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3202 | 32 | 260 | 51% | 3194 | 57% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2940 | 37 | 224 | 53% | 2912 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |