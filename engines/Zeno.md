# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2132<sub>(+227) | 2384<sub>(+225) | 2417<sub>(+160) |  |
| 2.0 | 2026-03-08 | 1905 | 2159 | 2257 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-02 04:44:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [1905, 2132]
  line "STC (8.0+0.08s)" [1905, 2132]
  line "LTC (60.0+0.60s)" [2159, 2384]
  line "" [2257, 2417]
  line "VLTC (2m24s+1.12s)" [2257, 2417]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2417 | 34 | 292 | 51% | 2407 | 28% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 35 | 296 | 51% | 2379 | 20% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2132 | 36 | 280 | 53% | 2099 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2257 | 30 | 384 | 49% | 2277 | 24% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2159 | 28 | 460 | 49% | 2167 | 21% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1905 | 27 | 482 | 48% | 1924 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |