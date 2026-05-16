# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2512<sub>(+116) | 2869<sub>(+126) | 2994<sub>(+129) |  |
| 7.0 | 2026-04-25 | 2396<sub>(+33) | 2743<sub>(+65) | 2865<sub>(+41) |  |
| 6.0 | 2026-04-20 | 2363<sub>(+330) | 2678<sub>(+220) | 2824<sub>(+216) |  |
| 5.0 | 2026-04-15 | 2033<sub>(+51) | 2458<sub>(+172) | 2608<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1982<sub>(+231) | 2286<sub>(+172) | 2446<sub>(+179) |  |
| 3.0 | 2026-04-09 | 1751<sub>(+622) | 2114<sub>(+760) | 2267<sub>(+679) |  |
| 2.0 | 2026-04-08 | 1129<sub>(+386) | 1354<sub>(+533) | 1588<sub>(+663) |  |
| 1.0 | 2026-04-06 | 743 | 821 | 925 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-16 06:26:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [743, 1129, 1751, 1982, 2033, 2363, 2396, 2512]
  line "STC (8.0+0.08s)" [743, 1129, 1751, 1982, 2033, 2363, 2396, 2512]
  line "LTC (60.0+0.60s)" [821, 1354, 2114, 2286, 2458, 2678, 2743, 2869]
  line "VLTC (2m24s+1.12s)" [925, 1588, 2267, 2446, 2608, 2824, 2865, 2994]
  line "VLTC (2m24s+1.12s)" [925, 1588, 2267, 2446, 2608, 2824, 2865, 2994]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 32 | 306 | 50% | 2998 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2869 | 34 | 274 | 50% | 2870 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2512 | 34 | 300 | 51% | 2496 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2865 | 34 | 270 | 52% | 2849 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2743 | 35 | 266 | 50% | 2746 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2396 | 33 | 320 | 48% | 2421 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2824 | 36 | 248 | 52% | 2808 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 36 | 274 | 51% | 2668 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2363 | 32 | 344 | 54% | 2325 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2608 | 33 | 324 | 49% | 2620 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2458 | 36 | 268 | 50% | 2456 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2033 | 36 | 276 | 50% | 2033 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2446 | 34 | 310 | 54% | 2408 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2286 | 36 | 272 | 49% | 2298 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 39 | 248 | 52% | 1964 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2267 | 40 | 232 | 51% | 2263 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2114 | 39 | 246 | 48% | 2134 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1751 | 43 | 208 | 47% | 1783 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1588 | 34 | 316 | 48% | 1619 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1354 | 39 | 258 | 46% | 1409 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1129 | 35 | 300 | 51% | 1103 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 925 | 80 | 110 | 38% | 1088 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 821 | 85 | 104 | 37% | 1042 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 743 | 91 | 92 | 38% | 952 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |