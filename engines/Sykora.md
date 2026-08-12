# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2917<sub>(+216) | 3254<sub>(+162) | 3349<sub>(+178) |  |
| 3.1 | 2026-07-15 | 2701<sub>(+375) | 3092<sub>(+102) | 3171<sub>(+129) |  |
| 3.0 | 2026-07-12 | 2326<sub>(+new) | 2990<sub>(+new) | 3042<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1993<sub>(+114) | 2348<sub>(+134) | 2430<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1879 | 2214 | 2406 |  |
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

Generated: 2026-08-12 08:17:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "STC (8.0+0.08s)" [1879, 1993, 2326, 2701, 2917]
  line "STC (8.0+0.08s)" [1879, 1993, 2326, 2701, 2917]
  line "LTC (60.0+0.60s)" [2214, 2348, 2990, 3092, 3254]
  line "VLTC (2m24s+1.12s)" [2406, 2430, 3042, 3171, 3349]
  line "VLTC (2m24s+1.12s)" [2406, 2430, 3042, 3171, 3349]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3349 | 33 | 226 | 48% | 3364 | 77% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3254 | 38 | 172 | 53% | 3229 | 74% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2917 | 38 | 176 | 55% | 2882 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 44 | 132 | 50% | 3168 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3092 | 44 | 132 | 52% | 3081 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2701 | 46 | 126 | 51% | 2688 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3042 | 48 | 124 | 56% | 2977 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 56 | 96 | 54% | 2943 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2326 | 34 | 240 | 65% | 2215 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 36 | 254 | 53% | 2406 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 33 | 304 | 50% | 2344 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1993 | 34 | 306 | 51% | 1982 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2406 | 126 | 28 | 21% | 2709 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2214 | 70 | 70 | 46% | 2246 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1879 | 97 | 40 | 41% | 1999 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |