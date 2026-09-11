# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2944<sub>(+229) | 3276<sub>(+172) | 3368<sub>(+182) |  |
| 3.1 | 2026-07-15 | 2715<sub>(+374) | 3104<sub>(+99) | 3186<sub>(+131) |  |
| 3.0 | 2026-07-12 | 2341<sub>(+new) | 3005<sub>(+new) | 3055<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2003<sub>(+114) | 2361<sub>(+133) | 2445<sub>(+26) |  |
| 0.1.0 | 2026-02-17 | 1889 | 2228 | 2419 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-11 04:43:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "" [1889, 2003, 2341, 2715, 2944]
  line "STC (8.0+0.08s)" [1889, 2003, 2341, 2715, 2944]
  line "LTC (60.0+0.60s)" [2228, 2361, 3005, 3104, 3276]
  line "" [2419, 2445, 3055, 3186, 3368]
  line "VLTC (2m24s+1.12s)" [2419, 2445, 3055, 3186, 3368]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 31 | 258 | 48% | 3378 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3276 | 34 | 216 | 53% | 3252 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2944 | 35 | 208 | 56% | 2903 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3186 | 44 | 132 | 50% | 3183 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 44 | 132 | 52% | 3094 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2715 | 46 | 126 | 51% | 2701 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3055 | 48 | 124 | 56% | 2990 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3005 | 56 | 96 | 54% | 2958 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2341 | 34 | 240 | 65% | 2229 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2445 | 36 | 254 | 53% | 2419 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2361 | 33 | 304 | 50% | 2356 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2003 | 34 | 306 | 51% | 1993 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2419 | 126 | 28 | 21% | 2723 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 70 | 70 | 46% | 2260 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1889 | 97 | 40 | 41% | 2010 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |