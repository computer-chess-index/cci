# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.5 | 2026-06-02 | 3011<sub>(+new) | 3179<sub>(+new) | 3262<sub>(+new) |  |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2912<sub>(+new) | 3131<sub>(+new) | 3163<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2938<sub>(+new) | 3160<sub>(+new) | 3181<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2908<sub>(+86) | 3102<sub>(+98) | 3156<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2822<sub>(+75) | 3004<sub>(+72) | 3087<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2747<sub>(+533) | 2932<sub>(+532) | 2955<sub>(+482) |  |
| 2.1 | 2025-10-13 | 2214<sub>(+new) | 2400<sub>(+new) | 2473<sub>(+new) |  |
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

Generated: 2026-07-11 06:28:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2214, 2747, 2822, 2908, 2938, 2912, 3011]
  line "STC (8.0+0.08s)" [2214, 2747, 2822, 2908, 2938, 2912, 3011]
  line "LTC (60.0+0.60s)" [2400, 2932, 3004, 3102, 3160, 3131, 3179]
  line "VLTC (2m24s+1.12s)" [2473, 2955, 3087, 3156, 3181, 3163, 3262]
  line "VLTC (2m24s+1.12s)" [2473, 2955, 3087, 3156, 3181, 3163, 3262]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2214, 2747, 2822, 2908, 2938, 2912, 3011]
  line "STC (8.0+0.08s)" [2214, 2747, 2822, 2908, 2938, 2912, 3011]
  line "LTC (60.0+0.60s)" [2400, 2932, 3004, 3102, 3160, 3131, 3179]
  line "VLTC (2m24s+1.12s)" [2473, 2955, 3087, 3156, 3181, 3163, 3262]
  line "VLTC (2m24s+1.12s)" [2473, 2955, 3087, 3156, 3181, 3163, 3262]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3262 | 29 | 314 | 50% | 3266 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 30 | 300 | 51% | 3164 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3011 | 32 | 280 | 49% | 3016 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 35 | 228 | 52% | 3147 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 42 | 158 | 53% | 3112 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2912 | 41 | 170 | 49% | 2923 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 104 | 24 | 58% | 3117 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3160 | 102 | 24 | 54% | 3124 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2938 | 110 | 24 | 50% | 2940 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 35 | 226 | 49% | 3167 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3102 | 33 | 260 | 52% | 3086 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2908 | 33 | 264 | 50% | 2909 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3087 | 35 | 232 | 51% | 3081 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 36 | 212 | 52% | 2985 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2822 | 37 | 224 | 48% | 2839 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2955 | 51 | 128 | 57% | 2878 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2932 | 43 | 184 | 59% | 2842 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2747 | 56 | 108 | 53% | 2704 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 57 | 110 | 48% | 2504 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2400 | 58 | 108 | 48% | 2419 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2214 | 62 | 88 | 51% | 2207 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |