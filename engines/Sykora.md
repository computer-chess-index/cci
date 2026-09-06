# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2942<sub>(+228) | 3274<sub>(+170) | 3367<sub>(+181) |  |
| 3.1 | 2026-07-15 | 2714<sub>(+374) | 3104<sub>(+100) | 3186<sub>(+132) |  |
| 3.0 | 2026-07-12 | 2340<sub>(+new) | 3004<sub>(+new) | 3054<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2005<sub>(+115) | 2360<sub>(+132) | 2444<sub>(+25) |  |
| 0.1.0 | 2026-02-17 | 1890 | 2228 | 2419 |  |
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

Generated: 2026-09-06 06:28:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "" [1890, 2005, 2340, 2714, 2942]
  line "STC (8.0+0.08s)" [1890, 2005, 2340, 2714, 2942]
  line "LTC (60.0+0.60s)" [2228, 2360, 3004, 3104, 3274]
  line "" [2419, 2444, 3054, 3186, 3367]
  line "VLTC (2m24s+1.12s)" [2419, 2444, 3054, 3186, 3367]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3367 | 31 | 254 | 48% | 3376 | 77% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3274 | 35 | 204 | 54% | 3248 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2942 | 36 | 200 | 56% | 2900 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3186 | 44 | 132 | 50% | 3182 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 44 | 132 | 52% | 3093 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2714 | 46 | 126 | 51% | 2700 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 48 | 124 | 56% | 2989 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 56 | 96 | 54% | 2957 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2340 | 34 | 240 | 65% | 2229 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 36 | 254 | 53% | 2419 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2360 | 33 | 304 | 50% | 2356 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2005 | 34 | 306 | 51% | 1994 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2419 | 126 | 28 | 21% | 2722 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 70 | 70 | 46% | 2260 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1890 | 97 | 40 | 41% | 2010 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |