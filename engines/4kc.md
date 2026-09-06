# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2541<sub>(-47) | 2859<sub>(+43) | 2963<sub>(+19) |  |
| 8.0 | 2026-03-10 | 2588<sub>(+105) | 2816<sub>(+27) | 2944<sub>(+83) |  |
| 5.0 | 2025-10-30 | 2483 | 2789 | 2861 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+4kc+<version>&body=###%20Engine%20name%0A4kc%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:21:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "" [2483, 2588, 2541]
  line "STC (8.0+0.08s)" [2483, 2588, 2541]
  line "LTC (60.0+0.60s)" [2789, 2816, 2859]
  line "" [2861, 2944, 2963]
  line "VLTC (2m24s+1.12s)" [2861, 2944, 2963]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2963 | 27 | 406 | 49% | 2974 | 40% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2859 | 27 | 420 | 51% | 2851 | 42% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2541 | 25 | 534 | 51% | 2533 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 28 | 402 | 52% | 2924 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2816 | 29 | 374 | 51% | 2807 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2588 | 27 | 456 | 50% | 2581 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 32 | 296 | 49% | 2873 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2789 | 31 | 324 | 48% | 2804 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2483 | 30 | 396 | 51% | 2477 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |