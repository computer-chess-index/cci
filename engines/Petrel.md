# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.5 | 2026-06-02 | 3006<sub>(+new) | 3174<sub>(+new) | 3260<sub>(+new) |  |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2909<sub>(+new) | 3128<sub>(+new) | 3160<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2935<sub>(+new) | 3158<sub>(+new) | 3178<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2905<sub>(+88) | 3100<sub>(+99) | 3154<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2817<sub>(+74) | 3001<sub>(+73) | 3085<sub>(+133) |  |
| 3.0 | 2025-11-26 | 2743<sub>(+533) | 2928<sub>(+533) | 2952<sub>(+483) |  |
| 2.1 | 2025-10-13 | 2210<sub>(+new) | 2395<sub>(+new) | 2469<sub>(+new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
| 1.0 | 2025-08-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A3.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-19 06:27:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2210, 2743, 2817, 2905, 2935, 2909, 3006]
  line "STC (8.0+0.08s)" [2210, 2743, 2817, 2905, 2935, 2909, 3006]
  line "LTC (60.0+0.60s)" [2395, 2928, 3001, 3100, 3158, 3128, 3174]
  line "VLTC (2m24s+1.12s)" [2469, 2952, 3085, 3154, 3178, 3160, 3260]
  line "VLTC (2m24s+1.12s)" [2469, 2952, 3085, 3154, 3178, 3160, 3260]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 28 | 332 | 50% | 3262 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3174 | 28 | 336 | 50% | 3167 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3006 | 30 | 316 | 49% | 3016 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 35 | 228 | 52% | 3144 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 42 | 158 | 53% | 3109 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2909 | 41 | 170 | 49% | 2920 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 104 | 24 | 58% | 3114 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3158 | 102 | 24 | 54% | 3121 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2935 | 110 | 24 | 50% | 2938 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 35 | 226 | 49% | 3164 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3100 | 33 | 260 | 52% | 3083 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2905 | 33 | 264 | 50% | 2907 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3085 | 35 | 232 | 51% | 3078 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3001 | 36 | 212 | 52% | 2982 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2817 | 37 | 224 | 48% | 2836 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2952 | 51 | 128 | 57% | 2874 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2928 | 43 | 184 | 59% | 2839 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2743 | 56 | 108 | 53% | 2700 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2469 | 57 | 110 | 48% | 2500 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2395 | 58 | 108 | 48% | 2415 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2210 | 62 | 88 | 51% | 2205 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |