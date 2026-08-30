# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2375<sub>(+223) | 2616<sub>(+225) | 2749<sub>(+249) |  |
| 1.5 | 2026-05-26 | 2152<sub>(+149) | 2391<sub>(+100) | 2500<sub>(+151) |  |
| 1.4 | 2026-04-25 | 2003<sub>(+488) | 2291<sub>(+436) | 2349<sub>(+378) |  |
| 1.3 | 2026-04-11 | 1515<sub>(+new) | 1855<sub>(+new) | 1971<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:08:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "" [1515, 2003, 2152, 2375]
  line "STC (8.0+0.08s)" [1515, 2003, 2152, 2375]
  line "LTC (60.0+0.60s)" [1855, 2291, 2391, 2616]
  line "" [1971, 2349, 2500, 2749]
  line "VLTC (2m24s+1.12s)" [1971, 2349, 2500, 2749]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2749 | 32 | 314 | 46% | 2777 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2616 | 34 | 280 | 51% | 2601 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2375 | 36 | 256 | 53% | 2348 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2500 | 32 | 322 | 50% | 2502 | 27% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2391 | 36 | 250 | 50% | 2391 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2152 | 33 | 322 | 52% | 2130 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2349 | 29 | 420 | 51% | 2337 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2291 | 31 | 380 | 53% | 2257 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2003 | 30 | 406 | 51% | 1985 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1971 | 34 | 324 | 48% | 1986 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1855 | 32 | 364 | 50% | 1852 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1515 | 31 | 378 | 50% | 1508 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |