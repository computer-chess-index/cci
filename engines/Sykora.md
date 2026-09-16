# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2951<sub>(+235) | 3282<sub>(+176) | 3371<sub>(+182) |  |
| 3.1 | 2026-07-15 | 2716<sub>(+374) | 3106<sub>(+98) | 3189<sub>(+131) |  |
| 3.0 | 2026-07-12 | 2342<sub>(+new) | 3008<sub>(+new) | 3058<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2005<sub>(+115) | 2363<sub>(+134) | 2446<sub>(+25) |  |
| 0.1.0 | 2026-02-17 | 1890 | 2229 | 2421 |  |
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

Generated: 2026-09-16 04:42:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "" [1890, 2005, 2342, 2716, 2951]
  line "STC (8.0+0.08s)" [1890, 2005, 2342, 2716, 2951]
  line "LTC (60.0+0.60s)" [2229, 2363, 3008, 3106, 3282]
  line "" [2421, 2446, 3058, 3189, 3371]
  line "VLTC (2m24s+1.12s)" [2421, 2446, 3058, 3189, 3371]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3371 | 30 | 262 | 48% | 3380 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3282 | 33 | 224 | 54% | 3255 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2951 | 33 | 228 | 55% | 2911 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3189 | 44 | 132 | 50% | 3186 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 44 | 132 | 52% | 3096 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2716 | 46 | 126 | 51% | 2703 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 48 | 124 | 56% | 2993 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3008 | 56 | 96 | 54% | 2961 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2342 | 34 | 240 | 65% | 2230 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2446 | 36 | 254 | 53% | 2421 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2363 | 33 | 304 | 50% | 2357 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2005 | 34 | 306 | 51% | 1994 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2421 | 126 | 28 | 21% | 2724 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 70 | 70 | 46% | 2261 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1890 | 97 | 40 | 41% | 2012 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |